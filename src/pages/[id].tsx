import React from 'react';
import {DetailsHOC} from 'HOCs';
import { useParams } from 'react-router-dom';
type Props = {};

const School = (props: Props) => {
	const { id } = useParams<'id'>();
	return <DetailsHOC id={id} />;
};

export default School;
