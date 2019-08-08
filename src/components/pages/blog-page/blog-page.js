import React from 'react';
import './blog-page.scss';

import PageHeader from '../common/page-header';

const BlogPage = () => {
	return (
		<section className="blog">
			<PageHeader headerText={"Blog"} />
		</section>
	);
}

export default BlogPage;