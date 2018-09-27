/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Criar Cartório
 * @param {org.cartorio.registrocivil.cartorio.CriarCartorio} dadosCartorio
 * @transaction
 */
async function CriarCartorio(dadosCartorio) {
    // Save the old value of the asset.
    // const oldValue = dadosCartorio.asset.value;

    // Update the asset with the new value.
    // dadosCartorio.asset.value = dadosCartorio.newValue;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.cartorio.registrocivil.cartorio.Cartorio');
    // Update the asset in the asset registry.
    await assetRegistry.add(dadosCartorio.asset);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.cartorio.registrocivil.cartorio', 'CartorioCriado');
    event.asset = dadosCartorio.asset;
    emit(event);
}

/**
 * Criar Registro
 * @param {org.cartorio.registrocivil.registro.CriarRegistro} dadosRegistro
 * @transaction
 */
async function CriarRegistro (dadosRegistro) {
    const assetRegistry = await getAssetRegistry('org.cartorio.registrocivil.registro.Registro');
    await assetRegistry.add(dadosRegistro.asset);
    let event = getFactory('org.cartorio.registrocivil.registro', 'RegistroCriado');
    event.asset = dadosRegistro.asset;
    emit(event)
}


