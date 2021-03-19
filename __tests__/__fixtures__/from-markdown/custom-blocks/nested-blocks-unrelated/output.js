/** @jsx h */
import h from '../../../hyperscript';

export default (
    <document>
        <header_one>Header 1</header_one>
        <x-tabs>
            <x-tab title="Tab 1">
                <x-common nested="true">
                    <unstyled>
                        <text />
                    </unstyled>
                </x-common>
            </x-tab>
            <x-tab title="Tab 2">
                <paragraph>Hello world</paragraph>
            </x-tab>
        </x-tabs>
    </document>
);
