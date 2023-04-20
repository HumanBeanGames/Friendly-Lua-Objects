﻿NDSummary.OnToolTipsLoaded("File:Plugins/MoonSharp/Interpreter/DataTypes/UserData.cs",{1236:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1236\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.</span>&#8203;UserData</div></div></div><div class=\"TTSummary\">Class exposing C# objects as Lua userdata.&nbsp; For efficiency, a global registry of types is maintained, instead of a per-script one.</div></div>",1238:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1238\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private</span> UserData()</div></div></div>",1240:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1240\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> DynValue UserValue { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div></div><div class=\"TTSummary\">Gets or sets the &quot;uservalue&quot;. See debug.getuservalue and debug.setuservalue.&nbsp; http://&#8203;www&#8203;.lua&#8203;.org&#8203;/manual&#8203;/5&#8203;.2&#8203;/manual&#8203;.html&#8203;#pdf-debug&#8203;.setuservalue</div></div>",1241:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1241\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public object</span> Object { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets the object associated to this userdata (null for statics)</div></div>",1242:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1242\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IUserDataDescriptor Descriptor { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets the type descriptor of this userdata</div></div>",1244:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1244\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static</span> UserData()</div></div></div>",1245:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1245\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> IUserDataDescriptor RegisterType&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">InteropAccessMode&nbsp;</td><td class=\"PName\">accessMode</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> InteropAccessMode.Default,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">friendlyName</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Registers a type for userdata interop</div></div>",1246:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1246\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> IUserDataDescriptor RegisterType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName\">type,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">InteropAccessMode&nbsp;</td><td class=\"PName\">accessMode</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> InteropAccessMode.Default,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">friendlyName</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Registers a type for userdata interop</div></div>",1247:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1247\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> IUserDataDescriptor RegisterProxyType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IProxyFactory&nbsp;</td><td class=\"PName\">proxyFactory,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">InteropAccessMode&nbsp;</td><td class=\"PName\">accessMode</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> InteropAccessMode.Default,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">friendlyName</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Registers a proxy type.</div></div>",1248:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1248\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> IUserDataDescriptor RegisterProxyType&lt;TProxy, TTarget&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Func&lt;TTarget, TProxy&gt;&nbsp;</td><td class=\"PName\">wrapDelegate,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">InteropAccessMode&nbsp;</td><td class=\"PName\">accessMode</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> InteropAccessMode.Default,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">friendlyName</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">where</span> TProxy : <span class=\"SHKeyword\">class</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">where</span> TTarget : <span class=\"SHKeyword\">class</span></div></div><div class=\"TTSummary\">Registers a proxy type using a delegate.</div></div>",1249:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1249\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> IUserDataDescriptor RegisterType&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IUserDataDescriptor&nbsp;</td><td class=\"PName last\">customDescriptor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Registers a type with a custom userdata descriptor</div></div>",1250:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1250\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> IUserDataDescriptor RegisterType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">type,</td></tr><tr><td class=\"PType first\">IUserDataDescriptor&nbsp;</td><td class=\"PName last\">customDescriptor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Registers a type with a custom userdata descriptor</div></div>",1251:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1251\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> IUserDataDescriptor RegisterType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IUserDataDescriptor&nbsp;</td><td class=\"PName last\">customDescriptor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Registers a type with a custom userdata descriptor</div></div>",1252:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1252\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static void</span> RegisterAssembly(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Assembly&nbsp;</td><td class=\"PName\">asm</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">includeExtensionTypes</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Registers all types marked with a MoonSharpUserDataAttribute that ar contained in an assembly.</div></div>",1253:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1253\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool</span> IsTypeRegistered(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">t</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether the specified type is registered. Note that this should be used only to check if a descriptor has been registered EXACTLY. For many types a descriptor can still be created, for example through the descriptor of a base type or implemented interfaces.</div></div>",1254:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1254\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static bool</span> IsTypeRegistered&lt;T&gt;()</div></div><div class=\"TTSummary\">Determines whether the specified type is registered. Note that this should be used only to check if a descriptor has been registered EXACTLY. For many types a descriptor can still be created, for example through the descriptor of a base type or implemented interfaces.</div></div>",1255:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1255\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static void</span> UnregisterType&lt;T&gt;()</div></div><div class=\"TTSummary\">Unregisters a type.&nbsp; WARNING: unregistering types at runtime is a dangerous practice and may cause unwanted errors.&nbsp; Use this only for testing purposes or to re-register the same type in a slightly different way.&nbsp; Additionally, it\'s a good practice to discard all previous loaded scripts after calling this method.</div></div>",1256:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1256\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static void</span> UnregisterType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">t</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Unregisters a type.&nbsp; WARNING: unregistering types at runtime is a dangerous practice and may cause unwanted errors.&nbsp; Use this only for testing purposes or to re-register the same type in a slightly different way.&nbsp; Additionally, it\'s a good practice to discard all previous loaded scripts after calling this method.</div></div>",1257:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1257\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue Create(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">o,</td></tr><tr><td class=\"PType first\">IUserDataDescriptor&nbsp;</td><td class=\"PName last\">descr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a userdata DynValue from the specified object, using a specific descriptor</div></div>",1258:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1258\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue Create(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">o</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a userdata DynValue from the specified object</div></div>",1259:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1259\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue CreateStatic(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IUserDataDescriptor&nbsp;</td><td class=\"PName last\">descr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a static userdata DynValue from the specified IUserDataDescriptor</div></div>",1260:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1260\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue CreateStatic(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">t</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a static userdata DynValue from the specified Type</div></div>",1261:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1261\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> DynValue CreateStatic&lt;T&gt;()</div></div><div class=\"TTSummary\">Creates a static userdata DynValue from the specified Type</div></div>",1263:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1263\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> IRegistrationPolicy RegistrationPolicy { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div></div><div class=\"TTSummary\">Gets or sets the registration policy to be used in the whole application</div></div>",1264:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1264\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> InteropAccessMode DefaultAccessMode { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div></div><div class=\"TTSummary\">Gets or sets the default access mode to be used in the whole application</div></div>",1266:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1266\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static void</span> RegisterExtensionType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName\">type,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">InteropAccessMode&nbsp;</td><td class=\"PName\">mode</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> InteropAccessMode.Default</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Registers an extension Type (that is a type containing extension methods)</div></div>",1267:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1267\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> List&lt;IOverloadableMemberDescriptor&gt; GetExtensionMethodsByNameAndType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name,</td></tr><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">extendedType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets all the extension methods which can match a given name and extending a given Type</div></div>",1268:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1268\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static int</span> GetExtensionMethodsChangeVersion()</div></div><div class=\"TTSummary\">Gets a number which gets incremented everytime the extension methods registry changes.&nbsp; Use this to invalidate caches based on extension methods</div></div>",1269:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1269\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> IUserDataDescriptor GetDescriptorForType&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">searchInterfaces</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the best possible type descriptor for a specified CLR type.</div></div>",1270:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1270\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> IUserDataDescriptor GetDescriptorForType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">type,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">searchInterfaces</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the best possible type descriptor for a specified CLR type.</div></div>",1271:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1271\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> IUserDataDescriptor GetDescriptorForObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">o</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the best possible type descriptor for a specified CLR object.</div></div>",1272:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1272\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> Table GetDescriptionOfRegisteredTypes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">useHistoricalData</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets a table with the description of registered types.</div></div>",1273:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1273\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> IEnumerable&lt;Type&gt; GetRegisteredTypes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">useHistoricalData</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets all the registered types.</div></div>"});