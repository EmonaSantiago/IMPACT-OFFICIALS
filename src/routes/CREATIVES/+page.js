import { performGraphqlQuery } from '$lib/utils/query';
export async function load({}) {
	// retrieve the articles to show on the homepage
	const responseData = await performGraphqlQuery({
		query: `
      {
        allFashions {
          brand
          image {
            url
          }
        }
        allBeautyLifestyles {
          brand
          image {
            url
          }
        }
        creativepage {
          creatives
        }
      }
    `
	});
	return responseData.data;
}
