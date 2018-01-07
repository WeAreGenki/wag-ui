/**
 * @wearegenki/vue-directive-view
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

function install(Vue, options = {}) {
  const name = options.name || 'view';
  const className = options.class || 'hide';

  Vue.directive(name, (el, { value }) => {
    if (value) {
      el.classList.remove(className);
    } else {
      el.classList.add(className);
    }
  });
}

export default {
  install,
};
