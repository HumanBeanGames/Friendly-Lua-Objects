﻿NDSummary.OnToolTipsLoaded("File:Plugins/MoonSharp/Interpreter/DataTypes/Table.cs",{1283:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1283\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.</span>&#8203;Table</div></div></div><div class=\"TTSummary\">A class representing a Lua table.</div></div>",1285:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1285\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> LinkedList&lt;TablePair&gt; m_Values</div></div></div>",1286:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1286\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> LinkedListIndex&lt;DynValue, TablePair&gt; m_ValueMap</div></div></div>",1287:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1287\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> LinkedListIndex&lt;<span class=\"SHKeyword\">string</span>, TablePair&gt; m_StringMap</div></div></div>",1288:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1288\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> LinkedListIndex&lt;<span class=\"SHKeyword\">int</span>, TablePair&gt; m_ArrayMap</div></div></div>",1289:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1289\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> Script m_Owner</div></div></div>",1290:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1290\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> m_InitArray</div></div></div>",1291:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1291\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> m_CachedLength</div></div></div>",1292:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1292\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> m_ContainsNilEntries</div></div></div>",1294:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1294\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Table(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">owner</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initializes a new instance of the Table class.</div></div>",1295:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1295\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Table(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">Script&nbsp;</td><td class=\"PName last\">owner,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\">DynValue[]&nbsp;</td><td class=\"PName last\">arrayValues</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initializes a new instance of the Table class.</div></div>",1297:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1297\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Script OwnerScript { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the script owning this resource.</div></div>",1299:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1299\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> Clear()</div></div><div class=\"TTSummary\">Removes all items from the Table.</div></div>",1300:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1300\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private int</span> GetIntegralKey(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">d</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the integral key from a double.</div></div>",1302:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype1302\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public object this</span>[</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">object</span>[]&nbsp;</td><td class=\"PName last\">keys</td></tr></table></td><td class=\"PAfterParameters\">] { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</td></tr></table></div></div><div class=\"TTSummary\">Gets or sets the System.Object with the specified key(s).&nbsp; This will marshall CLR and MoonSharp objects in the best possible way.&nbsp; Multiple keys can be used to access subtables.</div></div>",1303:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype1303\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public object this</span>[</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">key</td></tr></table></td><td class=\"PAfterParameters\">] { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</td></tr></table></div></div><div class=\"TTSummary\">Gets or sets the System.Object with the specified key(s).&nbsp; This will marshall CLR and MoonSharp objects in the best possible way.</div></div>",1305:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1305\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> Table ResolveMultipleKeys(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">object</span>[]&nbsp;</td><td class=\"PName last\">keys,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">key</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1306:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1306\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Append(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Append the value to the table using the next available integer index.</div></div>",1307:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1307\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> PerformTableSet&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">LinkedListIndex&lt;T, TablePair&gt;&nbsp;</td><td class=\"PName last\">listIndex,</td></tr><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PName last\">key,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">keyDynValue,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isNumber,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">appendKey</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1308:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1308\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">key,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the value associated to the specified key.</div></div>",1309:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1309\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">key,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the value associated to the specified key.</div></div>",1310:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1310\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">key,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the value associated to the specified key.</div></div>",1311:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1311\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">key,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the value associated with the specified key.</div></div>",1312:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1312\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>[]&nbsp;</td><td class=\"PName last\">keys,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the value associated with the specified keys.&nbsp; Multiple keys can be used to access subtables.</div></div>",1313:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1313\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue Get(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">key</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the value associated with the specified key.</div></div>",1314:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1314\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue Get(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">key</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the value associated with the specified key.</div></div>",1315:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1315\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue Get(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">key</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the value associated with the specified key.</div></div>",1316:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1316\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue Get(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">key</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the value associated with the specified key.&nbsp; (expressed as a System.Object).</div></div>",1317:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1317\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue Get(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">object</span>[]&nbsp;</td><td class=\"PName last\">keys</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the value associated with the specified keys (expressed as an array of System.Object).&nbsp; This will marshall CLR and MoonSharp objects in the best possible way.&nbsp; Multiple keys can be used to access subtables.</div></div>",1318:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1318\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> DynValue RawGetValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">LinkedListNode&lt;TablePair&gt;&nbsp;</td><td class=\"PName last\">linkedListNode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1319:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1319\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue RawGet(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">key</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the value associated with the specified key, without bringing to Nil the non-existant values.</div></div>",1320:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1320\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue RawGet(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">key</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the value associated with the specified key, without bringing to Nil the non-existant values.</div></div>",1321:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1321\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue RawGet(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">key</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the value associated with the specified key, without bringing to Nil the non-existant values.</div></div>",1322:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1322\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue RawGet(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">key</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the value associated with the specified key, without bringing to Nil the non-existant values.</div></div>",1323:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1323\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue RawGet(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">object</span>[]&nbsp;</td><td class=\"PName last\">keys</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the value associated with the specified keys (expressed as an array of System.Object).&nbsp; This will marshall CLR and MoonSharp objects in the best possible way.&nbsp; Multiple keys can be used to access subtables.</div></div>",1324:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1324\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private bool</span> PerformTableRemove&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">LinkedListIndex&lt;T, TablePair&gt;&nbsp;</td><td class=\"PName last\">listIndex,</td></tr><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PName last\">key,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1325:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1325\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Remove(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">key</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Remove the value associated with the specified key from the table.</div></div>",1326:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1326\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Remove(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">key</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Remove the value associated with the specified key from the table.</div></div>",1327:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1327\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Remove(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">key</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Remove the value associated with the specified key from the table.</div></div>",1328:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1328\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Remove(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">key</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Remove the value associated with the specified key from the table.</div></div>",1329:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1329\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Remove(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">object</span>[]&nbsp;</td><td class=\"PName last\">keys</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Remove the value associated with the specified keys from the table.&nbsp; Multiple keys can be used to access subtables.</div></div>",1330:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1330\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> CollectDeadKeys()</div></div><div class=\"TTSummary\">Collects the dead keys. This frees up memory but invalidates pending iterators.&nbsp; It\'s called automatically internally when the semantics of Lua tables allow, but can be forced externally if it\'s known that no iterators are pending.</div></div>",1331:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1331\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> TablePair? NextKey(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">v</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns the next pair from a value</div></div>",1332:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1332\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> TablePair? GetNextOf(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">LinkedListNode&lt;TablePair&gt;&nbsp;</td><td class=\"PName last\">linkedListNode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1334:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1334\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> Length { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the length of the &quot;array part&quot;.</div></div>",1336:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1336\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal void</span> InitNextArrayKeys(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">val,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">lastpos</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1338:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1338\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Table MetaTable { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div></div><div class=\"TTSummary\">Gets the meta-table associated with this instance.</div></div>",1340:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1340\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private</span> Table m_MetaTable</div></div></div>",1342:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1342\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IEnumerable&lt;TablePair&gt; Pairs { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Enumerates the key/value pairs.</div></div>",1343:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1343\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IEnumerable&lt;DynValue&gt; Keys { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Enumerates the keys.</div></div>",1344:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1344\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IEnumerable&lt;DynValue&gt; Values { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Enumerates the values</div></div>"});