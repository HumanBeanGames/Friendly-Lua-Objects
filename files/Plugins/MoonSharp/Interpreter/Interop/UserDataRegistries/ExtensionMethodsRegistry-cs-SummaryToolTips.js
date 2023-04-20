﻿NDSummary.OnToolTipsLoaded("File:Plugins/MoonSharp/Interpreter/Interop/UserDataRegistries/ExtensionMethodsRegistry.cs",{2972:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2972\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">internal</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Interop.&#8203;UserDataRegistries.</span>&#8203;ExtensionMethodsRegistry</div></div></div><div class=\"TTSummary\">Registry of all extension methods. Use UserData statics to access these.</div></div>",2974:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2974\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private static object</span> s_Lock</div></div></div>",2975:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2975\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private static</span> MultiDictionary&lt;<span class=\"SHKeyword\">string</span>, IOverloadableMemberDescriptor&gt; s_Registry</div></div></div>",2976:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2976\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private static</span> MultiDictionary&lt;<span class=\"SHKeyword\">string</span>, UnresolvedGenericMethod&gt; s_UnresolvedGenericsRegistry</div></div></div>",2977:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2977\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private static int</span> s_ExtensionMethodChangeVersion</div></div></div>",2978:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2978\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">private</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Interop.&#8203;UserDataRegistries.&#8203;ExtensionMethodsRegistry.</span>&#8203;UnresolvedGenericMethod</div></div></div></div>",2980:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2980\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public readonly</span> MethodInfo Method</div></div></div>",2981:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2981\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public readonly</span> InteropAccessMode AccessMode</div></div></div>",2982:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2982\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public readonly</span> HashSet&lt;Type&gt; AlreadyAddedTypes</div></div></div>",2984:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2984\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> UnresolvedGenericMethod(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MethodInfo&nbsp;</td><td class=\"PName last\">mi,</td></tr><tr><td class=\"PType first\">InteropAccessMode&nbsp;</td><td class=\"PName last\">mode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2986:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2986\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static void</span> RegisterExtensionType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName\">type,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">InteropAccessMode&nbsp;</td><td class=\"PName\">mode</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> InteropAccessMode.Default</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Registers an extension Type (that is a type containing extension methods)</div></div>",2987:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2987\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private static object</span> FrameworkGetMethods()</div></div></div>",2988:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2988\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> IEnumerable&lt;IOverloadableMemberDescriptor&gt; GetExtensionMethodsByName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets all the extension methods which can match a given name</div></div>",2989:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2989\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static int</span> GetExtensionMethodsChangeVersion()</div></div><div class=\"TTSummary\">Gets a number which gets incremented everytime the extension methods registry changes.&nbsp; Use this to invalidate caches based on extension methods</div></div>",2990:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2990\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> List&lt;IOverloadableMemberDescriptor&gt; GetExtensionMethodsByNameAndType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name,</td></tr><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">extendedType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets all the extension methods which can match a given name and extending a given Type</div></div>",2991:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2991\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> MethodInfo InstantiateMethodInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MethodInfo&nbsp;</td><td class=\"PName last\">mi,</td></tr><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">extensionType,</td></tr><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">genericType,</td></tr><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">extendedType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2992:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2992\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> Type GetGenericMatch(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">extensionType,</td></tr><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">extendedType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>"});