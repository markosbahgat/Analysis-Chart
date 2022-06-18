import React from 'react';
import { DetailsHOC } from 'HOCs';
import { useParams } from 'react-router-dom';

interface Props {}

const School: React.FC<Props> = () => {
	const { id } = useParams<'id'>();
	return <DetailsHOC id={id} />;
};

export default School;
