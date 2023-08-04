export const GetOfferQuery = `
  query getOffers($after: Cursor, $brand: string, $model: string,  $color: string, $category: string, $from_power: number, $to_power: number) {
    offerCollection(
      after: $after
      first: 9
      filter: {
        brand: {
          eq: $brand 
        }
        model: {
          eq: $model
        }
        color: {
          eq: $color
        }
        category: {
          eq: $category
        }
        performance: {
          gte: $from_power
          lte: $to_power
        }

      }
      ) {
      edges {
        cursor
        node {
          id
          brand
          model
          performance
          vehicle_history {
            reg_date
          }
          drivetrain {
            fuel {
              type
            }
            consumption {
              unit
              consumption_combined
            }
            transmission_type
            cc
          }
          im_price {
            consumer_price_gross
          }
          media {
            final { 
              url
            }
          }
          technical_features {
            drive
          }
          vehicle_type {
            condition
          }
          category
          color
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`

export const GetOneOfferQuery = `
  query getOffer($id: ID!) {
    offer: offerCollection(filter: { id: { eq: $id }}) {
      edges {
        node {
          id
          brand
          model
          performance
          vehicle_history {
            reg_date
          }
          drivetrain {
            fuel {
              type
            }
            consumption {
              unit
              consumption_combined
            }
            transmission_type
            cc
          }
          im_price {
            consumer_price_gross
          }
          media {
            final { 
              url
            }
          }
          technical_features {
            drive
          }
          vehicle_type {
            condition
          }
          category
          color
        }
      }
    }
  }
`
