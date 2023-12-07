import ReactionError from "@reactioncommerce/reaction-error";

export default async function currentSellerActiveProducts(parent, args, context, info) {
    let { account } = context;
    if (account === null || account === undefined) {
        throw new ReactionError("access-denied", "Access Denied");
    }
    if (account?.roles != 'vendor') {
        throw new ReactionError("access-denied", "Access Denied");
    }
    const currentSellerSoldProductsResp = await context.queries.currentSellerActiveProducts(parent, args, context, info);
    return currentSellerSoldProductsResp;
}
