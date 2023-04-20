﻿NDSummary.OnToolTipsLoaded("File:Plugins/MoonSharp/Interpreter/Interop/BasicDescriptors/DispatchingUserDataDescriptor.cs",{2296:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2296\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public abstract</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Interop.&#8203;BasicDescriptors.</span>&#8203;DispatchingUserDataDescriptor</div></div></div><div class=\"TTSummary\">An abstract user data descriptor which accepts members described by IMemberDescriptor objects and correctly dispatches to them.&nbsp; Metamethods are also by default dispatched to operator overloads and other similar methods - see MetaIndex .</div></div>",2298:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2298\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private int</span> m_ExtMethodsVersion</div></div></div>",2299:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2299\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private</span> Dictionary&lt;<span class=\"SHKeyword\">string</span>, IMemberDescriptor&gt; m_MetaMembers</div></div></div>",2300:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2300\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private</span> Dictionary&lt;<span class=\"SHKeyword\">string</span>, IMemberDescriptor&gt; m_Members</div></div></div>",2302:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2302\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">protected const string</span> SPECIALNAME_INDEXER_GET</div></div><div class=\"TTSummary\">The special name used by CLR for indexer getters</div></div>",2303:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2303\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">protected const string</span> SPECIALNAME_INDEXER_SET</div></div><div class=\"TTSummary\">The special name used by CLR for indexer setters</div></div>",2304:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2304\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">protected const string</span> SPECIALNAME_CAST_EXPLICIT</div></div><div class=\"TTSummary\">The special name used by CLR for explicit cast conversions</div></div>",2305:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2305\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">protected const string</span> SPECIALNAME_CAST_IMPLICIT</div></div><div class=\"TTSummary\">The special name used by CLR for implicit cast conversions</div></div>",2307:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2307\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public string</span> Name { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets the name of the descriptor (usually, the name of the type described).</div></div>",2308:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2308\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Type Type { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets the type this descriptor refers to</div></div>",2309:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2309\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public string</span> FriendlyName { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets a human readable friendly name of the descriptor</div></div>",2311:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2311\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected</span> DispatchingUserDataDescriptor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName\">type,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">friendlyName</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initializes a new instance of the StandardUserDataDescriptor class.</div></div>",2312:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2312\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> AddMetaMember(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name,</td></tr><tr><td class=\"PType first\">IMemberDescriptor&nbsp;</td><td class=\"PName last\">desc</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adds a member to the meta-members list.</div></div>",2313:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2313\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> AddDynValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adds a DynValue as a member</div></div>",2314:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2314\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> AddMember(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name,</td></tr><tr><td class=\"PType first\">IMemberDescriptor&nbsp;</td><td class=\"PName last\">desc</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adds a property to the member list</div></div>",2316:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2316\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IEnumerable&lt;<span class=\"SHKeyword\">string</span>&gt; MemberNames { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the member names.</div></div>",2317:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2317\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IEnumerable&lt;KeyValuePair&lt;<span class=\"SHKeyword\">string</span>, IMemberDescriptor&gt;&gt; Members { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the members.</div></div>",2319:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2319\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> IMemberDescriptor FindMember(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">memberName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Finds the member with a given name. If not found, null is returned.</div></div>",2320:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2320\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> RemoveMember(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">memberName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Removes the member with a given name. In case of overloaded functions, all overloads are removed.</div></div>",2322:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2322\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IEnumerable&lt;<span class=\"SHKeyword\">string</span>&gt; MetaMemberNames { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the meta member names.</div></div>",2323:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2323\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IEnumerable&lt;KeyValuePair&lt;<span class=\"SHKeyword\">string</span>, IMemberDescriptor&gt;&gt; MetaMembers { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the meta members.</div></div>",2325:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2325\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> IMemberDescriptor FindMetaMember(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">memberName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Finds the meta member with a given name. If not found, null is returned.</div></div>",2326:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2326\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> RemoveMetaMember(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">memberName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Removes the meta member with a given name. In case of overloaded functions, all overloads are removed.</div></div>",2327:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2327\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> AddMemberTo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Dictionary&lt;<span class=\"SHKeyword\">string</span>, IMemberDescriptor&gt;&nbsp;</td><td class=\"PName last\">members,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name,</td></tr><tr><td class=\"PType first\">IMemberDescriptor&nbsp;</td><td class=\"PName last\">desc</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2328:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2328\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public virtual</span> DynValue Index(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isDirectIndexing</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Performs an &quot;index&quot; &quot;get&quot; operation. This tries to resolve minor variations of member names.</div></div>",2329:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2329\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> DynValue TryIndexOnExtMethod(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">indexName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Tries to perform an indexing operation by checking newly added extension methods for the given indexName.</div></div>",2330:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2330\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> HasMember(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">exactName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether the descriptor contains the specified member (by exact name)</div></div>",2331:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2331\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> HasMetaMember(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">exactName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether the descriptor contains the specified member in the meta list (by exact name)</div></div>",2332:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2332\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected virtual</span> DynValue TryIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">indexName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Tries to perform an indexing operation by checking methods and properties for the given indexName</div></div>",2333:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2333\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public virtual bool</span> SetIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isDirectIndexing</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Performs an &quot;index&quot; &quot;set&quot; operation. This tries to resolve minor variations of member names.</div></div>",2334:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2334\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected virtual bool</span> TrySetIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">indexName,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Tries to perform an indexing &quot;set&quot; operation by checking methods and properties for the given indexName</div></div>",2335:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2335\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> IOptimizableDescriptor.Optimize()</div></div></div>",2336:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2336\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected static string</span> Camelify(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Converts the specified name from underscore_case to camelCase.&nbsp; Just a wrapper over the DescriptorHelpers method with the same name,</div></div>",2337:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2337\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected static string</span> UpperFirstLetter(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Converts the specified name to one with an uppercase first letter (something to Something).&nbsp; Just a wrapper over the DescriptorHelpers method with the same name,</div></div>",2338:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2338\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public virtual string</span> AsString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Converts this userdata to string</div></div>",2339:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2339\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected virtual</span> DynValue ExecuteIndexer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IMemberDescriptor&nbsp;</td><td class=\"PName last\">mdesc,</td></tr><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Executes the specified indexer method.</div></div>",2340:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2340\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public virtual</span> DynValue MetaIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">metaname</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets a &quot;meta&quot; operation on this userdata. If a descriptor does not support this functionality, it should return &quot;null&quot; (not a nil).&nbsp; See IUserDataDescriptor.MetaIndex for further details.&nbsp; If a method exists marked with MoonSharpUserDataMetamethodAttribute for the specific metamethod requested, that method is returned.&nbsp; If the above fails, the following dispatching occur:&nbsp; __add, __sub, __mul, __div, __mod and __unm are dispatched to C# operator overloads (if they exist) __eq is dispatched to System.Object.Equals.&nbsp; __lt and __le are dispatched IComparable.Compare, if the type implements IComparable or IComparable{object} __len is dispatched to Length and Count properties, if those exist.&nbsp; __iterator is handled if the object implements IEnumerable or IEnumerator.&nbsp; __tonumber is dispatched to implicit or explicit conversion operators to standard numeric types.&nbsp; __tobool is dispatched to an implicit or explicit conversion operator to bool. If that fails, operator true is used.&nbsp; The script originating the request The object (null if a static request is done) The name of the metamember.</div></div>",2341:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2341\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private int</span> PerformComparison(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">p1,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">p2</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2342:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2342\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> DynValue MultiDispatchLessThanOrEqual(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2343:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2343\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> DynValue MultiDispatchLessThan(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2344:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2344\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> DynValue TryDispatchLength(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2345:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2345\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> DynValue MultiDispatchEqual(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2346:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2346\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private bool</span> CheckEquality(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">p1,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">p2</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2347:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2347\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> DynValue DispatchMetaOnMethod(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">methodName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2348:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2348\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> DynValue TryDispatchToNumber(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2349:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2349\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> DynValue TryDispatchToBool(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2350:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2350\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public virtual bool</span> IsTypeCompatible(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">type,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether the specified object is compatible with the specified type.&nbsp; Unless a very specific behaviour is needed, the correct implementation is a simple &quot; return type.IsInstanceOfType(obj); &quot;</div></div>"});