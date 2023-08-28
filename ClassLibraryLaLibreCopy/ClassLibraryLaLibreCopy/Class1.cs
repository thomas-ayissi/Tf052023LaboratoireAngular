namespace ClassLibraryLaLibreCopy;

using System.Data;
using System.Data.SqlClient;

string connectionString = "Data Source=server;Initial Catalog=database;User ID=username;Password=password;";
using (SqlConnection connection = new SqlConnection(connectionString))
{
    connection.Open();
    string query = "SELECT * FROM TableName";
    using (SqlCommand command = new SqlCommand(query, connection))
    {
        using (SqlDataReader reader = command.ExecuteReader())
        {
            while (reader.Read())
            {
                // Traitement des données retournées
            }
        }
    }
}


/*public class Class1
{

} */


