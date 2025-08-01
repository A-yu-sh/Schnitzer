"use client";

import { useSession } from "next-auth/react";
import { Dosis } from "next/font/google";
import Container from "../components/Container";
import Image from "next/image";
import { useState, useEffect } from "react";

const dosis = Dosis({
  weight: "600",
  subsets: ["vietnamese"],
});

export default function Page() {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(true);

  // Fetch orders when the session is authenticated
  useEffect(() => {
    if (status === "authenticated") {
      async function fetchOrders() {
        try {
          const res = await fetch("/api/user-orders");
          if (res.ok) {
            const data = await res.json();
            // Assuming the backend returns an array of orders
            setOrders(data);
          } else {
            // Log the error from the backend for debugging
            const errorData = await res.json();
            console.error("Failed to fetch orders:", errorData.error);
            setOrders([]); // Set to empty array on failure
          }
        } catch (error) {
          console.error("Error fetching orders:", error);
        } finally {
          setOrdersLoading(false);
        }
      }
      fetchOrders();
    }
  }, [status]); // Dependency array: run this effect when `status` changes

  if (status === "loading" || (status === "authenticated" && ordersLoading)) {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Unauthorized Access</p>;
  }

  const user = session?.user;

  return (
    <div>
      <Container>
        <div className="flex flex-col items-center md:items-start font-bold text-4xl mt-24 text-center md:text-left">
          <h1 className={`${dosis.className}`}>My Profile</h1>
          {user && (
            <div className="mt-8 flex flex-col items-center">
              {user.image && (
                <div className="relative w-24 h-24 rounded-full overflow-hidden">
                  <Image
                    src={user.image}
                    alt={`${user.name}'s profile picture`}
                    fill
                    sizes="96px"
                    className="object-cover"
                    priority
                  />
                </div>
              )}
              <h2 className="mt-4 text-2xl font-bold">{user.name}</h2>
              <p className="mt-2 text-xl font-medium text-gray-600">
                {user.email}
              </p>
            </div>
          )}

          <div className="mt-12 w-full">
            <h2 className={`${dosis.className} text-3xl mb-6`}>My Orders</h2>
            {orders.length > 0 ? (
              <div className="space-y-8">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="border-2 border-gray-200 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-2">
                      Order placed on:{" "}
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                    <div className="space-y-4">
                      {order.products.map((product, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-4">
                          <div className="relative w-16 h-16">
                            <Image
                              src={product.image || "/images/placeholder.png"}
                              alt={product.name}
                              fill
                              sizes="64px"
                              className="object-cover rounded-md"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-lg">
                              {product.name}
                            </p>
                            <p className="text-gray-600">
                              Quantity: {product.quantity}
                            </p>
                            <p className="text-gray-600">
                              Price: ${product.price / 100}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg text-gray-500">Failed To Load</p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
