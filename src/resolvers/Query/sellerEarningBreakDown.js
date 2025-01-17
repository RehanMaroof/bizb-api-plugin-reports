import ReactionError from "@reactioncommerce/reaction-error";

export default async function sellerEarningBreakDown(parent, args, context, info) {
    let { account } = context;
    if (account === null || account === undefined) {
        throw new ReactionError("access-denied", "Access Denied");
    }
    if (account?.roles != 'vendor') {
        throw new ReactionError("access-denied", "Access Denied");
    }
    const currentSellerUploadedProductMonthly = await context.queries.sellerEarningBreakDown(parent, args, context, info);
    console.log("currentSellerUploadedProductMonthly", currentSellerUploadedProductMonthly);
    return currentSellerUploadedProductMonthly;
}

