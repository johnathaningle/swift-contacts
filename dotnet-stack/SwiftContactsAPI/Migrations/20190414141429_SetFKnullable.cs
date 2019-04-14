using Microsoft.EntityFrameworkCore.Migrations;

namespace SwiftContactsAPI.Migrations
{
    public partial class SetFKnullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "EmailTemplateId",
                table: "EmailTemplates",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EmailTemplateId",
                table: "EmailTemplates");
        }
    }
}
