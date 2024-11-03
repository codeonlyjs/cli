import { Component, Style, Html } from "codeonly";
import { router } from "./router.js";
import { config } from "/config.js";

export class HomePage extends Component
{
    static template = {
        type: "main",
        class: "center",
        $: [
            Html.h(1, `Welcome to ${config.appName} 😀`),
            Html.p("It worked! Your new project is up and running!"),
            Html.h(2, "Next Steps"),
            Html.p("If you're running in development mode, make some changes and notice the site automatically live reload when you save."),
            Html.p(Html.raw("Run the site in production mode with <code>npm run prod</code>")),
            Html.p(Html.raw("Run the site in docker with <code>npm run up</code>")),
        ]
    }
}

Style.declare(`
main
{
    padding-top: 50px;
}
`);

router.register({
    pattern: "/",
    match: (r) => {
        r.page = new HomePage();
        return true;
    },
});