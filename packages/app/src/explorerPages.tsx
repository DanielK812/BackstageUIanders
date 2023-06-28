/*
 * Copyright 2021 The Backstage Authors
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

import {
  Content,
  ContentHeader,
  PageWithHeader,
  SupportButton,
  TableColumn,
  TableProps,
} from '@backstage/core-components';
import { configApiRef, useApi, useRouteRef } from '@backstage/core-plugin-api';
import { CatalogTable, CatalogTableRow } from '@backstage/plugin-catalog';
import {
  EntityKindPicker,
  EntityLifecyclePicker,
  EntityListProvider,
  EntityOwnerPicker,
  EntityTagPicker,
  EntityTypePicker,
  UserListFilterKind,
  UserListPicker,
  CatalogFilterLayout,
} from '@backstage/plugin-catalog-react';
import React from 'react';

/**
* DefaultExplorerPageProps
* @public
*/
export type DefaultExplorerPageProps = {
  initiallySelectedFilter?: UserListFilterKind;
  columns?: TableColumn<CatalogTableRow>[];
  actions?: TableProps<CatalogTableRow>['actions'];
};

/**
* DomainExplorerPage
* @public
*/
export const DomainExplorerPage = (props: DefaultExplorerPageProps) => {
  const { initiallySelectedFilter = 'all', columns, actions } = props;
  // eslint-disable-next-line no-alert
  const defaultColumns: TableColumn<CatalogTableRow>[] = [
      CatalogTable.columns.createTitleColumn({ hidden: true }),
      CatalogTable.columns.createNameColumn({defaultKind: 'Domain'}),
      CatalogTable.columns.createSystemColumn(),
      CatalogTable.columns.createOwnerColumn(),
      CatalogTable.columns.createSpecTypeColumn(),
      CatalogTable.columns.createSpecLifecycleColumn(),
      CatalogTable.columns.createMetadataDescriptionColumn(),
      CatalogTable.columns.createTagsColumn(),
  ];
  const configApi = useApi(configApiRef);
  const generatedSubtitle = `${
    configApi.getOptionalString('organization.name') ?? 'Backstage'
  } Domain Explorer`;

  return (
    <>
    <PageWithHeader
      themeId="apis"
      title='Domains'
      subtitle={generatedSubtitle}
      pageTitleOverride='Domains'
    >
      <Content>
        <ContentHeader title="">
          <SupportButton>All your Domains</SupportButton>
        </ContentHeader>
        <EntityListProvider>
          <CatalogFilterLayout>
            <CatalogFilterLayout.Filters>
              <EntityKindPicker initialFilter='domain' hidden />
              <EntityTypePicker />
              <UserListPicker initialFilter={initiallySelectedFilter} />
              <EntityOwnerPicker />
              <EntityLifecyclePicker />
              <EntityTagPicker />
            </CatalogFilterLayout.Filters>
            <CatalogFilterLayout.Content>
              <CatalogTable
                columns={columns || defaultColumns}
                actions={actions}
              />
            </CatalogFilterLayout.Content>
          </CatalogFilterLayout>
        </EntityListProvider>
      </Content>
    </PageWithHeader>
    <script>
      alert("works");
    </script>
    </>
  );
};

/**
* SubdomainExplorerPage
* @public
*/
export const SubdomainExplorerPage = (props: DefaultExplorerPageProps) => {
  const { initiallySelectedFilter = 'all', columns, actions } = props;

  const defaultColumns: TableColumn<CatalogTableRow>[] = [
      CatalogTable.columns.createTitleColumn({ hidden: true }),
      CatalogTable.columns.createNameColumn({defaultKind: 'System'}),
      CatalogTable.columns.createSystemColumn(),
      CatalogTable.columns.createOwnerColumn(),
      CatalogTable.columns.createSpecTypeColumn(),
      CatalogTable.columns.createSpecLifecycleColumn(),
      CatalogTable.columns.createMetadataDescriptionColumn(),
      CatalogTable.columns.createTagsColumn(),
  ];
  const configApi = useApi(configApiRef);
  const generatedSubtitle = `${
    configApi.getOptionalString('organization.name') ?? 'Backstage'
  } Subdomain Explorer`;

  return (
    <PageWithHeader
      themeId="apis"
      title='Subdomains'
      subtitle={generatedSubtitle}
      pageTitleOverride='Subdomains'
    >
      <Content>
        <ContentHeader title="">
          <SupportButton>All your Subdomains</SupportButton>
        </ContentHeader>
        <EntityListProvider>
          <CatalogFilterLayout>
            <CatalogFilterLayout.Filters>
              <EntityKindPicker initialFilter='system' hidden />
              <EntityTypePicker />
              <UserListPicker initialFilter={initiallySelectedFilter} />
              <EntityOwnerPicker />
              <EntityLifecyclePicker />
              <EntityTagPicker />
            </CatalogFilterLayout.Filters>
            <CatalogFilterLayout.Content>
              <CatalogTable
                columns={columns || defaultColumns}
                actions={actions}
              />
            </CatalogFilterLayout.Content>
          </CatalogFilterLayout>
        </EntityListProvider>
      </Content>
    </PageWithHeader>
  );
};

/**
* TeamExplorerPage
* @public
*/
export const TeamExplorerPage = (props: DefaultExplorerPageProps) => {
  const { initiallySelectedFilter = 'all', columns, actions } = props;

  const defaultColumns: TableColumn<CatalogTableRow>[] = [
      CatalogTable.columns.createTitleColumn({ hidden: true }),
      CatalogTable.columns.createNameColumn({defaultKind: 'Group'}),
      CatalogTable.columns.createSystemColumn(),
      CatalogTable.columns.createOwnerColumn(),
      CatalogTable.columns.createSpecTypeColumn(),
      CatalogTable.columns.createSpecLifecycleColumn(),
      CatalogTable.columns.createMetadataDescriptionColumn(),
      CatalogTable.columns.createTagsColumn(),
  ];
  const configApi = useApi(configApiRef);
  const generatedSubtitle = `${
    configApi.getOptionalString('organization.name') ?? 'Backstage'
  } Team Explorer`;

  return (
    <PageWithHeader
      themeId="apis"
      title='Teams'
      subtitle={generatedSubtitle}
      pageTitleOverride='Teams'
    >
      <Content>
        <ContentHeader title="">
          <SupportButton>All your Teams</SupportButton>
        </ContentHeader>
        <EntityListProvider>
          <CatalogFilterLayout>
            <CatalogFilterLayout.Filters>
              <EntityKindPicker initialFilter='group' hidden />
              <EntityTypePicker />
              <UserListPicker initialFilter={initiallySelectedFilter} />
              <EntityOwnerPicker />
              <EntityLifecyclePicker />
              <EntityTagPicker />
            </CatalogFilterLayout.Filters>
            <CatalogFilterLayout.Content>
              <CatalogTable
                columns={columns || defaultColumns}
                actions={actions}
              />
            </CatalogFilterLayout.Content>
          </CatalogFilterLayout>
        </EntityListProvider>
      </Content>
    </PageWithHeader>
  );
};

/**
* ServiceExplorerPage
* @public
*/
export const ServiceExplorerPage = (props: DefaultExplorerPageProps) => {
  const { initiallySelectedFilter = 'all', columns, actions } = props;

  const defaultColumns: TableColumn<CatalogTableRow>[] = [
      CatalogTable.columns.createTitleColumn({ hidden: true }),
      CatalogTable.columns.createNameColumn({defaultKind: 'Component'}),
      CatalogTable.columns.createSystemColumn(),
      CatalogTable.columns.createOwnerColumn(),
      CatalogTable.columns.createSpecTypeColumn(),
      CatalogTable.columns.createSpecLifecycleColumn(),
      CatalogTable.columns.createMetadataDescriptionColumn(),
      CatalogTable.columns.createTagsColumn(),
  ];
  const configApi = useApi(configApiRef);
  const generatedSubtitle = `${
    configApi.getOptionalString('organization.name') ?? 'Backstage'
  } Service Explorer`;

  return (
    <PageWithHeader
      themeId="apis"
      title='Services'
      subtitle={generatedSubtitle}
      pageTitleOverride='Services'
    >
      <Content>
        <ContentHeader title="">
          <SupportButton>All your Services</SupportButton>
        </ContentHeader>
        <EntityListProvider>
          <CatalogFilterLayout>
            <CatalogFilterLayout.Filters>
              <EntityKindPicker initialFilter='component' hidden />
              <EntityTypePicker />
              <UserListPicker initialFilter={initiallySelectedFilter} />
              <EntityOwnerPicker />
              <EntityLifecyclePicker />
              <EntityTagPicker />
            </CatalogFilterLayout.Filters>
            <CatalogFilterLayout.Content>
              <CatalogTable
                columns={columns || defaultColumns}
                actions={actions}
              />
            </CatalogFilterLayout.Content>
          </CatalogFilterLayout>
        </EntityListProvider>
      </Content>
    </PageWithHeader>
  );
};