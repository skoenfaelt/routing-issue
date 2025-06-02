export const useSchemaBuilder = () => {
  const schemaBuilderStore = useSchemaBuilderStore()

  return {
    schema: computed(() => schemaBuilderStore.schema),
    // Domains
    addDomain: schemaBuilderStore.addDomain,
    updateDomain: schemaBuilderStore.updateDomain,
    removeDomain: schemaBuilderStore.removeDomain,

    // Controller
    addController: schemaBuilderStore.addController,
    updateController: schemaBuilderStore.updateController,
    removeController: schemaBuilderStore.removeController,

    // Endpoints
    addEndpoint: schemaBuilderStore.addEndpoint,
    updateEndpoint: schemaBuilderStore.updateEndpoint,
    removeEndpoint: schemaBuilderStore.removeEndpoint,
    updateEndpointConfig: schemaBuilderStore.updateEndpointConfig,
  }
}
