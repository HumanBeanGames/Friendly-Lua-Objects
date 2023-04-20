﻿NDSummary.OnToolTipsLoaded("CSharpClass:MoonSharp.Interpreter.DataStructs.Slice",{1071:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1071\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">internal</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;DataStructs.</span>&#8203;Slice&#8203;<span class=\"TemplateSignature\">&lt;T&gt;</span></div></div></div><div class=\"TTSummary\">Provides facility to create a &quot;sliced&quot; view over an existing IListT</div></div>",1073:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1073\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">IList&lt;T&gt; m_SourceList</div></div></div>",1074:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1074\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> m_From</div></div></div>",1075:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1075\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> m_Length</div></div></div>",1076:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1076\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> m_Reversed</div></div></div>",1078:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1078\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Slice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IList&lt;T&gt;&nbsp;</td><td class=\"PName last\">list,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">from,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">length,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">reversed</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initializes a new instance of the Slice{T} class.</div></div>",1080:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype1080\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> T <span class=\"SHKeyword\">this</span>[</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">] { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</td></tr></table></div></div><div class=\"TTSummary\">Gets or sets the element at the specified index.</div></div>",1082:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1082\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> From { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the index from which the slice starts</div></div>",1083:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1083\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> Count { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the number of elements contained in the T:System.Collections.Generic.ICollection`1.</div></div>",1084:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1084\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> Reversed { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets a value indicating whether this Slice{T} operates in a reversed direction.</div></div>",1086:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1086\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private int</span> CalcRealIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Calculates the real index in the underlying collection</div></div>",1087:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1087\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IEnumerator&lt;T&gt; GetEnumerator()</div></div><div class=\"TTSummary\">Returns an enumerator that iterates through the collection.</div></div>",1088:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1088\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()</div></div><div class=\"TTSummary\">Returns an enumerator that iterates through a collection.</div></div>",1089:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1089\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> T[] ToArray()</div></div><div class=\"TTSummary\">Converts to an array.</div></div>",1090:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1090\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> List&lt;T&gt; ToList()</div></div><div class=\"TTSummary\">Converts to an list.</div></div>",1091:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1091\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public int</span> IndexOf(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PName last\">item</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines the index of a specific item in the T:System.Collections.Generic.IList`1.</div></div>",1092:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1092\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Insert(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PName last\">item</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Inserts an item to the T:System.Collections.Generic.IList`1 at the specified index.</div></div>",1093:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1093\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> RemoveAt(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Removes the T:System.Collections.Generic.IList`1 item at the specified index.</div></div>",1094:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1094\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Add(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PName last\">item</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adds an item to the T:System.Collections.Generic.ICollection`1.</div></div>",1095:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1095\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> Clear()</div></div><div class=\"TTSummary\">Removes all items from the T:System.Collections.Generic.ICollection`1.</div></div>",1096:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1096\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Contains(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PName last\">item</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether the T:System.Collections.Generic.ICollection`1 contains a specific value.</div></div>",1097:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1097\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> CopyTo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T[]&nbsp;</td><td class=\"PName last\">array,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">arrayIndex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Copies to.</div></div>",1099:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1099\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsReadOnly { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets a value indicating whether the T:System.Collections.Generic.ICollection`1 is read-only.</div></div>",1101:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1101\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Remove(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PName last\">item</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Removes the first occurrence of a specific object from the T:System.Collections.Generic.ICollection`1.</div></div>"});