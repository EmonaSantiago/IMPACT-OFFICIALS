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

        allVisuals {
          brand
          image {
            url
        }
      }

      allArtiestDansers {
        brand
        image {
          url
        }
      }

        allDjs {
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
