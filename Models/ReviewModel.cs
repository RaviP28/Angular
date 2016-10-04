using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularAPI.Models
{
    public class ReviewModel
    {
        public string stars { get; set; }
        public string author { get; set; }
        public string body { get; set; }
    }
}