using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SSYNEW.Startup))]
namespace SSYNEW
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
