"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[352],{2983:function(e,n,o){o.r(n),o.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var t=o(7462),i=o(3366),r=(o(7294),o(3905)),a=["components"],c={sidebar_position:4},p="Config Options",s={unversionedId:"configoptions",id:"configoptions",isDocsHomePage:!1,title:"Config Options",description:"You can use the options below in the capacitor.config.ts file under the electron prop. Please use ElectronCapacitorConfig exported from @capacitor-community/electron instead of CapacitorConfig from @capacitor/cli.\\",source:"@site/docs/configoptions.md",sourceDirName:".",slug:"/configoptions",permalink:"/electron/docs/configoptions",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Deeplinking",permalink:"/electron/docs/deeplinking"},next:{title:"Create a Capacitor Electron Plugin",permalink:"/electron/docs/creatingplugins"}},l=[],d={toc:l};function u(e){var n=e.components,o=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"config-options"},"Config Options"),(0,r.kt)("p",null,"You can use the options below in the ",(0,r.kt)("inlineCode",{parentName:"p"},"capacitor.config.ts")," file under the ",(0,r.kt)("inlineCode",{parentName:"p"},"electron")," prop. Please use ",(0,r.kt)("inlineCode",{parentName:"p"},"ElectronCapacitorConfig")," exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@capacitor-community/electron")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"CapacitorConfig")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@capacitor/cli"),".\\\nAll options are optional and can be omitted if you do not require them. The ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundColor")," property will also be used to configure the Electron window color.\\\nFurthermore, you can edit and tinker with the ",(0,r.kt)("inlineCode",{parentName:"p"},"electron/src/index.ts")," file as more is exposed to the developer as of V3."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ElectronCapacitorConfig } from '@capacitor-community/electron';\n\nconst config: ElectronCapacitorConfig = {\n  ...,\n  electron: {\n    // Custom scheme for your app to be served on in the electron window.\n    customUrlScheme: 'capacitor-electron',\n    // Switch on/off a tray icon and menu, which is customizable in the app.\n    trayIconAndMenuEnabled: false,\n    // Switch on/off whether or not a splashscreen will be used.\n    splashScreenEnabled: false,\n    // Custom image name in the electron/assets folder to use as splash image (.gif included)\n    splashScreenImageName: 'splash.png',\n    // Switch on/off if the main window should be hidden until brought to the front by the tray menu, etc.\n    hideMainWindowOnLaunch: false,\n    // Switch on/off whether or not to use deeplinking in your app.\n    deepLinkingEnabled: false,\n    // Custom protocol to be used with deeplinking for your app.\n    deepLinkingCustomProtocol: 'mycapacitorapp',\n  },\n  ...\n};\n\nexport default config;\n")))}u.isMDXComponent=!0}}]);