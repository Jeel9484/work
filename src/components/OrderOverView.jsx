import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SiHtml5 } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { SiXdadevelopers } from "react-icons/si";

const orders = [
	{
		icon: <IoMdNotificationsOutline className="text-blue-400 text-xl" />,
		title: "$2400, Design changes",
		date: "22 DEC 7:20 PM",
	},
	{
		icon: <SiHtml5 className="text-red-500 text-xl" />,
		title: "New order #4219423",
		date: "21 DEC 11:21 PM",
	},
	{
		icon: <FaShoppingCart className="text-blue-300 text-xl" />,
		title: "Server Payments for April",
		date: "21 DEC 9:28 PM",
	},
	{
		icon: <FaRegCreditCard className="text-yellow-400 text-xl" />,
		title: "New card added for order #3210145",
		date: "20 DEC 3:52 PM",
	},
	{
		icon: <FaShoppingCart className="text-blue-300 text-xl" />,
		title: "Unlock packages for Development",
		date: "19 DEC 11:35 PM",
	},
	{
		icon: <SiXdadevelopers className="text-pink-500 text-xl" />,
		title: "New order #9851258",
		date: "18 DEC 4:41 PM",
	},
	{
		icon: <SiXdadevelopers className="text-pink-500 text-xl" />,
		title: "New order #9851258",
		date: "18 DEC 4:41 PM",
	},
	{
		icon: <SiXdadevelopers className="text-pink-500 text-xl" />,
		title: "New order #9851258",
		date: "18 DEC 4:41 PM",
	},
];

const OrderOverView = () => {
	return (
		<div
			className="rounded-2xl bg-gradient-to-br from-[#0B1437] to-[#1A1F37] shadow-lg text-white w-full max-w-md min-h-[220px] p-4 sm:p-6 border border-white/5"
		>
			<div className="mb-4 sm:mb-6">
				<h2 className="text-lg sm:text-xl font-bold mb-1">Orders overview</h2>
				<div className="flex items-center gap-2 text-xs sm:text-sm text-green-300">
					<span className="w-3 h-3 bg-green-400 rounded-full flex items-center justify-center">
						<IoIosCheckmark className="text-white text-xs" />
					</span>
					<span className="font-medium">+30% this month</span>
				</div>
			</div>
			<div className="flex flex-col gap-4 sm:gap-6 mt-2 sm:mt-4">
				{orders.map((order, idx) => (
					<div key={idx} className="flex items-start gap-3">
						<div className="mt-1">{order.icon}</div>
						<div>
							<div className="font-medium text-sm sm:text-base">{order.title}</div>
							<div className="text-xs text-blue-200 mt-1">
								{order.date}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OrderOverView;
