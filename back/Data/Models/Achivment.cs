namespace Data.Models
{
    public class Achivment
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public float Progress { get; set; }

        public int UserId { get; set; }
        public User? User { get; set; }
    }
}
