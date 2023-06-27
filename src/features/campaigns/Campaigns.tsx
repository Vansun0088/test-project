import React, { useCallback, useState } from "react";
import { useListCampaignsQuery } from "../../services/campaigns";
import { useSelector } from "react-redux";
import { selectCampaigns } from "./campaignsSlice";
import Layout from "antd/es/layout/layout";
import { List } from "antd";
import { CampaignItem } from "../../components/CampaignItem/CampaignItem";
import { Campaign } from "../../types/campaigns";

export function Campaigns() {
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const { isFetching, currentData: { data } = {} } = useListCampaignsQuery({ page, limit });
	const campaigns = useSelector(selectCampaigns);
	const handleChangePageSize = useCallback((_: number, size: number) => {
		setLimit(size);
	}, []);

	return (
		<Layout style={wrapperStyle}>
			<List
				grid={grid}
				style={listStyle}
				pagination={{
					current: page,
					showSizeChanger: true,
					hideOnSinglePage: true,
					pageSize: limit,
					pageSizeOptions: [5, 8, 10],
					onShowSizeChange: handleChangePageSize,
					position: "bottom",
					total: campaigns.total,
					onChange: setPage,
				}}
				dataSource={data || generateStubs(limit)}
				renderItem={(data) => (
					<List.Item>
						<CampaignItem item={data} isFetching={isFetching} key={`item-${data.CA_ID}`} />
					</List.Item>
				)}
			/>
		</Layout>
	);
}

const grid = {
	gutter: 20,
	xs: 1,
	sm: 2,
	md: 2,
	lg: 4,
	xl: 5,
	xxl: 5,
};

const wrapperStyle: React.CSSProperties = {
	padding: 20,
	height: "100vh",
	display: "flex",
	alignItems: "center",
};

const listStyle: React.CSSProperties = {
	width: "100%",
};

const generateStubs = (limit: number) =>
	Array.from(
		{ length: limit },
		(i) =>
			({
				CA_ID: `item-${i}`,
				CA_NAME: `Campaign ${i}`,
				CA_DESC: `Description ${i}`,
				CA_MANAGER_ID: `Manager ${i}`,
				CA_PREVIEW_URL: `http://example.com/campaign-${i}`,
				CA_STARTD: "2023-06-01",
				CA_STOPD: "2023-06-30",
				CA_COST_AMOUNT: "100",
				CA_COST_CURRENCY: "USD",
				CA_REDIRECT_CAMPAIGN: "Redirect Campaign",
			} as unknown as Campaign)
	);
