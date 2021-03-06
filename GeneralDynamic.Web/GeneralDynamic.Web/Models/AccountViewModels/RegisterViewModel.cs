﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GeneralDynamic.Web.Models.AccountViewModels
{
    public class RegisterViewModel
    {

        [Required(ErrorMessage = "Username is required")]

        [Display(Name = "Username")]

        public string UserName { get; set; }
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }

        [Required(ErrorMessage = "Full Name is required")]
        [Display(Name = "FullName")]
        public string FullName { get; set; }

        [Display(Name = "Phone Number")]
        [DataType(DataType.PhoneNumber)]
        public string PhoneNumber { get; set; }
        [Required(ErrorMessage = "Secret is required")]
        [Display(Name = "Secret")]
        [DataType(DataType.Text)]
        public string Secret { get; set; }
        [Display(Name = "UserPhone")]
        public IFormFile UserPhoto { get; set; }

        public string GkRole { get; set; }
    }
}
