import { useCallback, useState } from "react";
import { Card } from "antd";
import { Campaign } from "../../types/campaigns";
import { CompanyContent } from "../CompanyContent/CompanyContent";

const { Meta } = Card;

type Props = {
	item: Campaign;
	isFetching: boolean;
};

export const CampaignItem = ({ item, isFetching }: Props) => {
	const [isOpened, setIsOpened] = useState(false);

	const startDate = new Date(item.CA_STARTD);
	const endDate = new Date(item.CA_STOPD);

	const formatDate = useCallback((date: Date) => {
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		});
	}, []);

	const showPopup = useCallback(() => {
		setIsOpened(true);
	}, []);

	const handleCancel = useCallback(() => {
		setIsOpened(false);
	}, []);

	return (
		<>
			<Card loading={isFetching} hoverable style={cardStyle} onClick={showPopup}>
				<Meta title={item.CA_NAME} description={item.CA_DOMAIN} />
				<Meta description={item.CA_PREVIEW_URL} />
				<Meta description={formatDate(startDate)} />
				<Meta description={formatDate(endDate)} />
			</Card>
			{isOpened ? (
				<CompanyContent onPressCancel={handleCancel} onPressOk={handleCancel} item={item} />
			) : (
				<div></div>
			)}
		</>
	);
};

const cardStyle = {
	minHeight: 270,
	maxHeight: "30%",
};
