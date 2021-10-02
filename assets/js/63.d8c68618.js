(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{595:function(a,s,t){"use strict";t.r(s);var n=t(8),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("在开发中，定时任务是非常常见的，java中通常会使用quartz,对于springboot来说也提供了非常方便的定时任务方案。")]),a._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),t("p",[a._v("只需要在启动类加上**@EnableScheduling**就可以开启定时任务")]),a._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),t("p",[a._v("在需要处理的任务方法上加上【@Scheduled】，类上加上【@Component】既可以将其配置为一个任务。例如")]),a._v(" "),t("p",[a._v("【@Scheduled(initialDelay = 1L, fixedRate = 1000L)】代表一个延迟一秒每秒执行一次的定时任务。")]),a._v(" "),t("h3",{attrs:{id:"参数说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[a._v("#")]),a._v(" 参数说明")]),a._v(" "),t("h4",{attrs:{id:"cron"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cron"}},[a._v("#")]),a._v(" cron")]),a._v(" "),t("p",[a._v("cron表达式不可以和除了zone外的其他参数一起使用对于zone也使用默认的本地时间不做配置。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cron 代表cron表达式，非常灵活。\n常见的表达式：\n0/5 * * * * ? 每5s执行\n11 /1 * * * ? 每分钟的11s执行\n20 01 01 * * ? 每天一点一分20秒执行\n0 0 1 1 * ? 每月1号凌晨1点执行一次\n0 26,29,33 * * * ?    在26分、29分、33分执行一次\n0 0/5 14,18 * * ?    每天的下午2点至2：55和6点至6点55分两个时间段内每5分钟一次触发\n0 0-5 14 * * ?       每天14:00至14:05每分钟一次触发\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("h4",{attrs:{id:"fixeddelay-fixeddelaystring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixeddelay-fixeddelaystring"}},[a._v("#")]),a._v(" fixedDelay/fixedDelayString")]),a._v(" "),t("p",[a._v("以固定的延迟执行任务，即距离上次任务结束固定时间来执行任务。")]),a._v(" "),t("h4",{attrs:{id:"fixedrate-fixedratestring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixedrate-fixedratestring"}},[a._v("#")]),a._v(" fixedRate/fixedRateString")]),a._v(" "),t("p",[a._v("以固定的频率执行任务，即使上次任务执行完了也会等到固定时间到才会执行。")]),a._v(" "),t("h4",{attrs:{id:"initialdelay-initialdelaystring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initialdelay-initialdelaystring"}},[a._v("#")]),a._v(" initialDelay/initialDelayString")]),a._v(" "),t("p",[a._v("服务启动后第一次执行的延迟时间。")]),a._v(" "),t("h3",{attrs:{id:"线程池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程池"}},[a._v("#")]),a._v(" 线程池")]),a._v(" "),t("p",[a._v("默认的使用单线程，对于执行过长的任务来说，必须等到上个任务执行完才会执行下个任务，通常是不会使用的，我们可以对执行任务的线程池进行配置，此时会有2个线程在交替执行任务。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Configuration")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ExecutorsConfig")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SchedulingConfigurer")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" POOL_SIZE "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("configureTasks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScheduledTaskRegistrar")]),a._v(" taskRegistrar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadPoolTaskScheduler")]),a._v(" threadPoolTaskScheduler "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadPoolTaskScheduler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        threadPoolTaskScheduler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setPoolSize")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("POOL_SIZE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        threadPoolTaskScheduler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setThreadNamePrefix")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"my-scheduled-task-pool-"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        threadPoolTaskScheduler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("initialize")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        taskRegistrar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setScheduler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("threadPoolTaskScheduler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);