import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { FaJira } from "react-icons/fa6";
import xdLogo from "../assets/xd.svg";
import iconLogo from "../assets/icon.svg";
import slackLogo from "../assets/slack.svg";
import spotifyLogo from "../assets/spotify.svg";
import invisionLogo from "../assets/invision.svg";

const projects = [
	{
		company: {
			name: "Chakra Soft UI Version",
			logo: xdLogo,
		},
		members: [
			"https://images.pexels.com/photos/32672129/pexels-photo-32672129.jpeg",
			"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
			"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
			"https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
			"https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
		],
		budget: "$14,000",
		completion: 60,
	},
	{
		company: {
			name: "Add Progress Track",
			logo: iconLogo,
		},
		members: [
			"https://images.pexels.com/photos/32672129/pexels-photo-32672129.jpeg",
			"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
		],
		budget: "$3,000",
		completion: 10,
	},
	{
		company: {
			name: "Fix Platform Errors",
			logo: slackLogo,
		},
		members: [
			"https://images.pexels.com/photos/32672129/pexels-photo-32672129.jpeg",
			"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
		],
		budget: "Not set",
		completion: 100,
	},
	{
		company: {
			name: "Launch our Mobile App",
			logo: spotifyLogo,
		},
		members: [
			"https://images.pexels.com/photos/32672129/pexels-photo-32672129.jpeg",
			"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
			"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
			"https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
		],
		budget: "$32,000",
		completion: 100,
	},
	{
		company: { name: "Add the New Pricing Page", logo: <FaJira /> },
		members: [
			"https://images.pexels.com/photos/32672129/pexels-photo-32672129.jpeg",
			"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
			"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
			"https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
			"https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
		],
		budget: "$400",
		completion: 25,
	},
	{
		company: {
			name: "Redesign New Online Shop",
			logo: invisionLogo,
		},
		members: [
			"https://images.pexels.com/photos/32672129/pexels-photo-32672129.jpeg",
			"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
		],
		budget: "$7,600",
		completion: 40,
	},
];

const ProjectCard = () => {
	return (
		<div className="bg-gradient-to-br from-[#0B1437] to-[#1A1F37] rounded-2xl p-4 sm:p-6 shadow-lg w-full max-w-9xl text-white overflow-x-auto border border-white/5">

			<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
				<div>
					<h2 className="text-lg sm:text-xl font-bold">Projects</h2>
					<div className="flex items-center gap-2 mt-1 text-xs sm:text-sm text-green-300">
						<span className="w-3 h-3 bg-green-400 rounded-full flex items-center justify-center">
							<IoIosCheckmark className="text-white text-xs" />
						</span>
						30 done this month
					</div>
				</div>
			</div>
			<div>
				<table className="w-full text-left">
					<thead>
						<tr className="text-blue-200 text-xs font-semibold">
							<th className="py-2">COMPANIES</th>
							<th className="py-2">MEMBERS</th>
							<th className="py-2">BUDGET</th>
							<th className="py-2">COMPLETION</th>
						</tr>
					</thead>
					<tbody>
						{projects.map((project, index) => (
							<tr
								key={index}
								className="border-b border-white/10 last:border-none"
							>
								<td className="py-4 flex items-center gap-3">
									{React.isValidElement(project.company.logo) ? (
										project.company.logo
									) : (
										<img
											src={project.company.logo}
											alt={project.company.name}
											className="w-7 h-7 rounded-md object-cover bg-white"
										/>
									)}
									<span className="font-semibold text-base">
										{project.company.name}
									</span>
								</td>
								<td className="py-4">
									<div className="flex -space-x-3">
										{project.members.map((member, idx) => (
											<img
												key={idx}
												src={member}
												alt={`Member ${idx + 1}`}
												className="w-8 h-8 rounded-full border-2 border-white object-cover shadow"
												style={{ zIndex: 10 - idx }}
											/>
										))}
									</div>
								</td>
								<td className="py-4 flex items-center gap-2">
									<span>{project.budget}</span>
								</td>
								<td className="py-4 font-semibold w-32 sm:w-56">
									<div>
										<span className="font-bold">{project.completion}%</span>
										<div className="w-full h-1.5 bg-[#1A1F37] rounded-full mt-1">
											<div
												className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500"
												style={{ width: `${project.completion}%` }}
											></div>
										</div>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProjectCard;
