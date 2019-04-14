using Microsoft.EntityFrameworkCore.Migrations;

namespace SwiftContactsAPI.Migrations
{
    public partial class CreateEmailBodyAttribute : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Body",
                table: "Emails",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Body",
                table: "Emails");
        }
    }
}
