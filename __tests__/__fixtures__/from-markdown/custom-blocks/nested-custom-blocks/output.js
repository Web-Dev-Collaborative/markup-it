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
                <paragraph>Some content</paragraph>
            </x-tab>
            <x-tab title="Tab 2">
                <paragraph>Some other content</paragraph>
            </x-tab>
        </x-tabs>
    </document>
);
