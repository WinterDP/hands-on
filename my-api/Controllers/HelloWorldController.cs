using Microsoft.AspNetCore.Mvc;

namespace MyApi.Controllers;

[ApiController]
[Route("[controller]")]
public class HellloWorldController : ControllerBase
{
    private static readonly string[] Greetings = new[]
    {
        "Hello", "Ola", "Hi", "Ciao", "Hallo"
    };

    private readonly ILogger<HellloWorldController> _logger;

    public HellloWorldController(ILogger<HellloWorldController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "SayHi")]
    public IEnumerable<HelloWorld> Get()
    {
        return Enumerable.Range(1, 1).Select(index => new HelloWorld
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Greeting = Greetings[Random.Shared.Next(Greetings.Length)]
        })
        .ToArray();
    }
}
