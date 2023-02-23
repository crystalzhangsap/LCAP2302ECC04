{
	"_Name": "MDKUIAPP",
	"Version": "/MDKUIAPP/Globals/AppDefinition_Version.global",
	"MainPage": "/MDKUIAPP/Pages/Main.page",
	"OnLaunch": [
		"/MDKUIAPP/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/MDKUIAPP/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/MDKUIAPP/Actions/Service/InitializeOnline.action",
	"Styles": "/MDKUIAPP/Styles/Styles.less",
	"Localization": "/MDKUIAPP/i18n/i18n.properties",
	"_SchemaVersion": "6.3"
}