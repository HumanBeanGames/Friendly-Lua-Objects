﻿NDSummary.OnToolTipsLoaded("File:Plugins/MoonSharp/Interpreter/Interop/IGeneratorUserDataDescriptor.cs",{3093:"<div class=\"NDToolTip TInterface LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3093\"><div class=\"CPEntry TInterface Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">interface</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Interop.</span>&#8203;IGeneratorUserDataDescriptor</div></div></div><div class=\"TTSummary\">An interface for type descriptors having the ability to generate other descriptors on the fly.</div></div>",3095:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3095\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">IUserDataDescriptor Generate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Generates a new descriptor for the specified type.&nbsp; The purpose is to allow a mechanism by which a type descriptor can replace itself with another descriptor for a specific type. For example, descriptors can be created on the fly to support generic types through this mechanism.&nbsp; The return value should be: null - if this descriptor is simply skipped for the specified type this - acts as if the descriptor was a vanilla descriptor a new descriptor - if a new descriptor should be used in place of this one&nbsp; It\'s recommended that instances of descriptors are cached for future references. One possible way, to do the caching is to have the generator register the descriptor through UserData.RegisterType.&nbsp; In that case, it should query whether the type is exactly registered, through UserData.IsTypeRegistered&nbsp; NOTE-1 : the search for descriptors does NOT stop with the descriptor returned by this type, but other descriptors (e.g. for interfaces) might still be added.&nbsp; NOTE-2 : the descriptor generation mechanism is not triggered on an exact match of types.&nbsp; NOTE-3 : the method is called in the context of a lock over the descriptors registry so no unpredictable changes to the registry can come from other threads during the execution of this method. However this method should not take other locks, to avoid deadlocks.</div></div>"});