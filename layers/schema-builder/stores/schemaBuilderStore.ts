export const useSchemaBuilderStore = defineStore(
  'schemaBuilderStore',
  () => {
    /// region refs
    const schema = ref<IApiSchema>({})
    /// endregion

    /// region Helpers
    const ensureDomainExists = (domain: string) => {
      if (!schema.value[domain]) {
        schema.value[domain] = {}
      }
    }

    const ensureControllerExists = (domain: string, controller: string) => {
      ensureDomainExists(domain)
      if (!schema.value[domain][controller]) {
        schema.value[domain][controller] = {}
      }
    }
    /// endregion

    /// region methods: Domains
    const addDomain = (domain: string) => ensureDomainExists(domain)

    const updateDomain = (domain: string, updatedDomain: string) => {
      if (schema.value[domain]) {
        schema.value[updatedDomain] = schema.value[domain]

        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete schema.value[domain]
      }
    }

    const removeDomain = (domain: string) => {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete schema.value[domain]
    }
    /// endregion

    /// region methods: Controller
    const addController = (domain: string, controller: string) => {
      ensureControllerExists(domain, controller)
    }

    const updateController = (domain: string, controller: string, updatedController: string) => {
      if (schema.value[domain]?.[controller]) {
        schema.value[domain][updatedController] = schema.value[domain][controller]
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete schema.value[domain][controller]
      }
    }

    const removeController = (domain: string, controller: string) => {
      delete schema.value[domain]?.[controller]
    }
    /// endregion

    /// region methods: Endpoints
    const addEndpoint = (domain: string, controller: string, endpoint: string, config: IEndpointConfig) => {
      ensureControllerExists(domain, controller)
      schema.value[domain][controller][endpoint] = config
    }

    const updateEndpoint = (domain: string, controller: string, endpoint: string, updatedEndpoint: string) => {
      const endpointConfig = schema.value[domain]?.[controller]?.[endpoint]
      if (endpointConfig) {
        schema.value[domain][controller][updatedEndpoint] = endpointConfig
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete schema.value[domain][controller][endpoint]
      }
    }

    const removeEndpoint = (domain: string, controller: string, endpoint: string) => {
      delete schema.value[domain]?.[controller]?.[endpoint]
    }

    const updateEndpointConfig = (domain: string, controller: string, endpoint: string, config: Partial<IEndpointConfig>) => {
      if (schema.value[domain]?.[controller]?.[endpoint]) {
        schema.value[domain][controller][endpoint] = { ...schema.value[domain][controller][endpoint], ...config }
      }
    }
    /// endregion

    return {
      schema,

      // Domains
      addDomain,
      updateDomain,
      removeDomain,

      // Controller
      addController,
      updateController,
      removeController,

      // Endpoints
      addEndpoint,
      updateEndpoint,
      removeEndpoint,
      updateEndpointConfig,
    }
  },
  {
    persist: false,
  },
)
