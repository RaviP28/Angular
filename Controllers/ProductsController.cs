using AngularAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularAPI.Controllers
{
    public class ProductsController : ApiController
    {
        // GET api/values
        public IEnumerable<ProductModel> Get()
        {
            return new ProductModel[]
            {
                new ProductModel
                {
                    name = "Rare Green Gem",
                    price = 10000.00m,
                    description = "This gem is the one and only gem that out shines all the gems and that is why this gem is a rare gem.",
                    soldOut = false,
                    canPurchase = true,
                    images = new ImageModel[] { new ImageModel { full = "images/Rare Green Gem-01-full.jpg", thumb = "images/Rare Green Gem-01-thumb.jpg" } },
                    reviews = new ReviewModel[] { new ReviewModel { stars = "5", author = "Ravi@Patel.com", body = "I love this product!" } },
                
                

                }
            };
        }
    }
}
