const routes = {
    // Home routes
    home: "/",
    // AboutUs and ContactUs routes
    aboutus: "/about",
    contactus: "/contact",
    //404
    error: "/error",
    error_payment: "/error-payment",

    //Menu
    menu: "/menu",
    //Chef
    chef: "/chef",
    chefDetail: "/chef-detail",

    //Blog
    blog: "/blog",
    blogDetail: "/blog-detail",

    //Shop Food
    shop: "/shop",
    foodShopDetail: "/shop-detail/:id",

    // Cart
    cartTab: "/cart",
    checkOut:"/check_out",
    OrderDetail:"/orderDetail/:id",

    // Reservation
    bookTable: "/book_table",
    bookingConfirm: "/booking_confirm/:id",
    bookingList: "/booking_list",

    // orderFood: "/order_food",

    // Authentication routes
    profile: "/profile",
    login: "/login",
    forgot_password: "/forgot-password",
    reset_password: "/reset-password/:resetToken",

};
export default routes;