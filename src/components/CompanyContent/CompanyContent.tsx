import { useEffect, useState } from "react";
import { useUserQuery } from "../../services/users";
import { Modal } from "antd";
import { Campaign } from "../../types/campaigns";

type Props = {
	item: Campaign;
	onPressOk: () => void;
	onPressCancel: () => void;
};

export const CompanyContent = ({ item, onPressOk, onPressCancel }: Props) => {
	const [search, setSearch] = useState<number | null>(null);
	const { currentData: { data: userData } = {} } = useUserQuery({ search }, { skip: !search });

	useEffect(() => {
		setSearch(item.CA_MANAGER_ID || null);
	}, []);

	return (
		<Modal title={item.CA_NAME} open={true} onOk={onPressOk} onCancel={onPressCancel} width={"70%"}>
			<h3>Manager ID {item.CA_MANAGER_ID}</h3>
			<div>
				Manager:{" "}
				{userData ? `${userData?.UR_FIRSTNAME} ${userData?.UR_LASTNAME}` : "Unknown Manager"}
			</div>
			<div dangerouslySetInnerHTML={{ __html: item.CA_DESC }} />
		</Modal>
	);
};
