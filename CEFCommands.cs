using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GTANetworkServer;
using GTANetworkShared;

namespace CEFCommands
{

    public CEFCommands : Script
    {
        public CEFCommands()
        {
            API.onClientEventTrigger += OnClientTriggered;
        }

        [Command("test")]
        public void TestFunction(Client player, string eventName, params object[] arguments)
        {
            API.triggerClientEvent(player, "testjs");//will run the browser
        }
        public void OnClientTriggered(Client player, string eventName, params object[] arguments)//Links to when the browser btnclicked happens
        {
            switch (eventName)
            {
                case "BackToTheFuture":
                    API.sendNotificationToPlayer(player, "We're back where we started.");
                    break;
            }
        }
    }

}
