import PRODUCT_MODEL from "@/model/ProductModel";

export async function GET_TRENDING_DATA() {
  const res = PRODUCT_MODEL.aggregate([{ $match: { istrending: "True" } }]);
  return res;
}

export async function GET_NEW_LAUNCH_DATA() {
  const res = PRODUCT_MODEL.aggregate([
    { $match: { category: "Smart Watch" } },
  ]);
  return res;
}
