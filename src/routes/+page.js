import { performGraphqlQuery } from '$lib/utils/query';
export async function load({}) {
	// retrieve the articles to show on the homepage
	const responseData = await performGraphqlQuery({
		query: `
      {
        homepage {
          image {
            url
          }
          homepageForm
          homepageNews
          homepageTitle
        }
        
    }
    `
	});
	return responseData.data;
}
