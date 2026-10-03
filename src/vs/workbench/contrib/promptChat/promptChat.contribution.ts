import { Registry } from 'vs/platform/registry/common/platform';
import { IViewContainersRegistry, ViewContainerLocation, Extensions as ViewContainerExtensions } from 'vs/workbench/common/views';
import { Codicon } from 'vs/base/common/codicons';
import { SyncDescriptor } from 'vs/platform/instantiation/common/descriptors';
import { ViewPaneContainer } from 'vs/workbench/browser/parts/views/viewPaneContainer';

export const PROMPT_CHAT_VIEW_CONTAINER_ID = 'workbench.view.promptChat';

Registry
	.as<IViewContainersRegistry>(ViewContainerExtensions.ViewContainersRegistry)
	.registerViewContainer(
		{
			id: PROMPT_CHAT_VIEW_CONTAINER_ID,
			title: { value: 'Prompt', original: 'Prompt' },
			icon: Codicon.comment,
			ctorDescriptor: new SyncDescriptor(ViewPaneContainer),
			storageId: PROMPT_CHAT_VIEW_CONTAINER_ID,
			hideIfEmpty: false
		},
		ViewContainerLocation.AuxiliaryBar
	);
