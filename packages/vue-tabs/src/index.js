/**
 * @wearegenki/vue-tabs
 * @author: Max Milton <max@wearegenki.com>
 *
 * Copyright 2018 We Are Genki
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import TabGroup from './TabGroup';
// import TabItem from './TabItem';
const TabItem = { name: 'TabItem' }; // FIXME: Should we have 2 separate components? If so import it

TabGroup.install = (Vue) => {
  Vue.component(TabGroup.name, TabGroup);
};

TabItem.install = (Vue) => {
  Vue.component(TabItem.name, TabItem);
};

export default { TabGroup, TabItem };