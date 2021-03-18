/** @jsx h */
import h from '../../../hyperscript';

export default (
    <document>
        <x-method>
            <paragraph>Method 1</paragraph>
            <x-sample lang="js">
                <paragraph>Some code</paragraph>
                <block
                    type="x-youtube"
                    isVoid
                    data={{ src: 'https://www.youtube.com/watch?v=XXXXXXX' }}
                />
                <paragraph>Some more code</paragraph>
            </x-sample>
            <x-sample lang="go">
                <unstyled>
                    <text />
                </unstyled>
            </x-sample>
        </x-method>
    </document>
);
