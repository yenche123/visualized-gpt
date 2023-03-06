import type { InjectionKey, Ref } from 'vue'

export const iframeSrcDocKey = Symbol() as InjectionKey<Ref<string>>
export const isLoadingKey = Symbol() as InjectionKey<Ref<boolean>>