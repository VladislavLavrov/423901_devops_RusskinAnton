using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace _12_Calculator.Migrations
{
    /// <inheritdoc />
    public partial class TypeOperationToVarChar : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Type_operation",
                table: "DataInputVariants",
                type: "varchar(128)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Type_operation",
                table: "DataInputVariants",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(128)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");
        }
    }
}
