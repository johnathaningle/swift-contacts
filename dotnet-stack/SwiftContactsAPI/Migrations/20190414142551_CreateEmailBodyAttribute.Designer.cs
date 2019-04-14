﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SwiftContactsAPI.Data;

namespace SwiftContactsAPI.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20190414142551_CreateEmailBodyAttribute")]
    partial class CreateEmailBodyAttribute
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.8-servicing-32085")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("SwiftContactsAPI.Models.Contact", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FName");

                    b.Property<string>("LName");

                    b.Property<int?>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Contacts");
                });

            modelBuilder.Entity("SwiftContactsAPI.Models.Email", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Body");

                    b.Property<int?>("EmailTemplateId");

                    b.Property<string>("Subject");

                    b.HasKey("Id");

                    b.HasIndex("EmailTemplateId");

                    b.ToTable("Emails");
                });

            modelBuilder.Entity("SwiftContactsAPI.Models.EmailKeyword", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("EmailId");

                    b.Property<string>("Keyword");

                    b.HasKey("Id");

                    b.HasIndex("EmailId");

                    b.ToTable("EmailKeywords");
                });

            modelBuilder.Entity("SwiftContactsAPI.Models.EmailTemplate", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Body");

                    b.Property<string>("Description");

                    b.Property<int?>("EmailTemplateId");

                    b.Property<int?>("EmailTemplateTypeId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("EmailTemplateTypeId");

                    b.ToTable("EmailTemplates");
                });

            modelBuilder.Entity("SwiftContactsAPI.Models.EmailTemplateType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Type");

                    b.HasKey("Id");

                    b.ToTable("EmailTemplateTypes");
                });

            modelBuilder.Entity("SwiftContactsAPI.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("SwiftContactsAPI.Models.UserEmail", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("EmailId");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("EmailId");

                    b.HasIndex("UserId");

                    b.ToTable("UserEmails");
                });

            modelBuilder.Entity("SwiftContactsAPI.Models.UserEmailRecipient", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("ContactId");

                    b.Property<int?>("EmailId");

                    b.HasKey("Id");

                    b.HasIndex("ContactId");

                    b.HasIndex("EmailId");

                    b.ToTable("UserEmailRecipients");
                });

            modelBuilder.Entity("SwiftContactsAPI.Models.Value", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Values");
                });

            modelBuilder.Entity("SwiftContactsAPI.Models.Contact", b =>
                {
                    b.HasOne("SwiftContactsAPI.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("SwiftContactsAPI.Models.Email", b =>
                {
                    b.HasOne("SwiftContactsAPI.Models.EmailTemplate", "EmailTemplate")
                        .WithMany()
                        .HasForeignKey("EmailTemplateId");
                });

            modelBuilder.Entity("SwiftContactsAPI.Models.EmailKeyword", b =>
                {
                    b.HasOne("SwiftContactsAPI.Models.Email", "Email")
                        .WithMany("EmailKeywords")
                        .HasForeignKey("EmailId");
                });

            modelBuilder.Entity("SwiftContactsAPI.Models.EmailTemplate", b =>
                {
                    b.HasOne("SwiftContactsAPI.Models.EmailTemplateType", "EmailTemplateType")
                        .WithMany("EmailTemplates")
                        .HasForeignKey("EmailTemplateTypeId");
                });

            modelBuilder.Entity("SwiftContactsAPI.Models.UserEmail", b =>
                {
                    b.HasOne("SwiftContactsAPI.Models.Email", "Email")
                        .WithMany("UserEmails")
                        .HasForeignKey("EmailId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SwiftContactsAPI.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SwiftContactsAPI.Models.UserEmailRecipient", b =>
                {
                    b.HasOne("SwiftContactsAPI.Models.Contact", "Contact")
                        .WithMany()
                        .HasForeignKey("ContactId");

                    b.HasOne("SwiftContactsAPI.Models.Email", "Email")
                        .WithMany("UserEmailRecipients")
                        .HasForeignKey("EmailId");
                });
#pragma warning restore 612, 618
        }
    }
}