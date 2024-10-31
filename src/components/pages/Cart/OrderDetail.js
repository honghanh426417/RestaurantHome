import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import LayoutPages from "../../layouts/LayoutPage";

function OrderDetail() {
    const { orderId } = useParams();
    const [orderDetail, setOrderDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrderDetail = async () => {
            try {
                const response = await api.get(`${url.ORDER.DETAIL}/${orderId}`, {
                    headers: { Authorization: `Bearer ${getAccessToken()}` }
                });
                setOrderDetail(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching order detail:", error);
                setLoading(false);
            }
        };

        fetchOrderDetail();
    }, [orderId]);

    if (loading) return <div>Loading...</div>;

    return (
        <LayoutPages showBreadCrumb={false}>
            <div className="order-detail-area default-padding">
                <div className="container">
                    <h2>Order Detail</h2>
                    {orderDetail ? (
                        <div>
                            <h3>Order ID: {orderDetail.id}</h3>
                            <p>Name: {orderDetail.customerName}</p>
                            <p>Phone: {orderDetail.customerPhone}</p>
                            <p>Address: {orderDetail.customerAddress}</p>
                            <h4>Items:</h4>
                            <ul>
                                {orderDetail.items.map(item => (
                                    <li key={item.id}>
                                        {item.name} x {item.quantity} - ${item.price}
                                    </li>
                                ))}
                            </ul>
                            <h3>Total Price: ${orderDetail.totalPrice}</h3>
                        </div>
                    ) : (
                        <p>No order found.</p>
                    )}
                </div>
            </div>
        </LayoutPages>
    );
}

export default OrderDetail;
