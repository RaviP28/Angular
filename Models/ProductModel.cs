using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularAPI.Models
{
    public class ProductModel
    {
        public string description { get; set; }
        public string name { get; set; }
        public decimal price { get; set; }
        public bool soldOut { get; set; }
        public bool canPurchase { get; set; }
        public ImageModel[] images { get; set; }
        public ReviewModel[] reviews { get; set; }

    }
}