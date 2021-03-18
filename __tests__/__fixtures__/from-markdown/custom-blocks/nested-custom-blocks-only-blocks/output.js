/** @jsx h */
import h from '../../../hyperscript';

export default (
    <document>
        <header_one>Header 1</header_one>
        <x-tabs>
            <x-tab title="Tab 1">
                <block
                    type="x-youtube"
                    isVoid
                    data={{ src: 'https://www.youtube.com/watch?v=XXXXXXX' }}
                />
            </x-tab>
            <x-tab title="Tab 2">
                <unstyled>
                    <text />
                </unstyled>
            </x-tab>
        </x-tabs>
    </document>
);
